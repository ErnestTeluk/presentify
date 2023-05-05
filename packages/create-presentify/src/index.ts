/* eslint-disable no-console */
import { blue, bold, red, yellow } from 'kolorist';
import minimist from 'minimist';
import { existsSync, readdirSync, mkdirSync, cpSync, rmSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import prompts from 'prompts';

const defaultTargetDir = 'presentify-project';

const argValue = minimist<{
  t?: string;
  template?: string;
}>(process.argv.slice(2), { string: ['_'] });

const cwd = process.cwd();

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
];

const getTargetDir = (targetDir: string | undefined) => {
  return targetDir?.trim().replace(/\/+$/g, '');
};

const isDirEmpty = (path: string) => {
  const files = readdirSync(path);
  return files.length === 0 || (files.length === 1 && files[0] === '.git');
};

const cli = async () => {
  const argTargetDir = getTargetDir(argValue._[0]);

  let targetDir = argTargetDir || defaultTargetDir;

  let result: prompts.Answers<'projectName' | 'overwrite' | 'variant'>;

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
          throw new Error(red('✖') + bold(' Operation cancelled'));
        },
      },
    );
  } catch (error: any) {
    console.log(error.message);
    return;
  }

  const { projectName, overwrite, variant } = result;

  const root = join(cwd, targetDir);

  if (overwrite) {
    isDirEmpty(root);
    readdirSync(root).forEach(f => rmSync(`${root}/${f}`, { recursive: true }));
  } else if (!existsSync(root)) {
    mkdirSync(root, { recursive: true });
  }

  const templateDir = resolve(
    dirname(fileURLToPath(import.meta.url)),
    '..',
    `templates/${variant}`,
  );

  cpSync(templateDir, root, { recursive: true });

  console.log('\nDone. Now run:\n');
  console.log(`cd ${projectName}\n`);
  console.log('npm install\n');
  console.log('npm run dev\n');
};

cli().catch(e => console.log(e));
/* eslint-enable no-console */
