import { blue, bold, red, yellow } from 'kolorist';
import minimist from 'minimist';
import { existsSync, readdirSync } from 'node:fs';
import prompts from 'prompts';

const getTargetDir = (targetDir: string | undefined) => {
  return targetDir?.trim().replace(/\/+$/g, '');
};

const isDirEmpty = (path: string) => {
  const files = readdirSync(path);
  return files.length === 0 || (files.length === 1 && files[0] === '.git');
};

const argValue = minimist<{
  t?: string;
  template?: string;
}>(process.argv.slice(2), { string: ['_'] });

const defaultTargetDir = 'presentify-project';

const variants = [
  {
    name: 'js',
    display: 'JavaScript',
    color: yellow,
  },
  {
    name: 'ts',
    display: 'TypeScript',
    color: blue,
  },
  {
    name: 'js-swc',
    display: 'JavaScript + SWC',
    color: yellow,
  },
  {
    name: 'ts-swc',
    display: 'TypeScript + SWC',
    color: blue,
  },
];

const init = async () => {
  const argTargetDir = getTargetDir(argValue._[0]);

  let targetDir = argTargetDir || defaultTargetDir;

  let result: prompts.Answers<'projectName' | 'overwrite'>;

  try {
    result = await prompts(
      [
        {
          type: 'text',
          name: 'projectName',
          message: bold('Project name:'),
          initial: defaultTargetDir,
          onState: (state: { value: string }) => {
            targetDir = getTargetDir(state.value) || defaultTargetDir;
          },
        },
        {
          type: () =>
            !existsSync(targetDir) || isDirEmpty(targetDir) ? null : 'confirm',
          name: 'overwrite',
          message: () =>
            (targetDir === '.'
              ? 'Current directory'
              : `Target directory "${targetDir}"`) +
            ' is not empty. Remove existing files and continue?',
        },
        {
          type: (_, { overwrite }: { overwrite?: boolean }) => {
            if (overwrite === false) {
              throw new Error(red('✖') + ' Operation cancelled');
            }
            return null;
          },
          name: 'overwriteChecker',
        },
        {
          type: 'select',
          name: 'variant',
          message: bold('Select a variant:'),
          choices: () =>
            variants.map(variant => {
              const variantColor = variant.color;
              return {
                title: variantColor(variant.display || variant.name),
                value: variant.name,
              };
            }),
        },
      ],
      {
        onCancel: () => {
          throw new Error(red('✖') + ' Operation cancelled');
        },
      },
    );
  } catch (error: any) {
    // eslint-disable-next-line no-console -- this console.log is needed to log errors
    console.log(error);
    return;
  }
};

// eslint-disable-next-line no-console -- this console.log is needed to log errors
init().catch(e => console.log(e));
