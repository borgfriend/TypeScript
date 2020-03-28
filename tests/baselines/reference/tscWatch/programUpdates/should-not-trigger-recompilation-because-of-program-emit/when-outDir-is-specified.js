/a/lib/tsc.js -w -p /user/username/projects/myproject/tsconfig.json
//// [/user/username/projects/myproject/file1.ts]
export const c = 30;

//// [/user/username/projects/myproject/src/file2.ts]
import {c} from "file1"; export const d = 30;

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/user/username/projects/myproject/tsconfig.json]
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */                       /* Enable incremental compilation */
    // "incremental": true,                   /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "target": "es5",                          /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "module": "amd",                          /* Specify library files to be included in the compilation. */
    // "lib": [],                             /* Allow javascript files to be compiled. */
    // "allowJs": true,                       /* Report errors in .js files. */
    // "checkJs": true,                       /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "jsx": "preserve",                     /* Generates corresponding '.d.ts' file. */
    // "declaration": true,                   /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates corresponding '.map' file. */
    // "sourceMap": true,                     /* Concatenate and emit output to single file. */
    // "outFile": "./",                       /* Redirect output structure to the directory. */
    "outDir": "build",                        /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "rootDir": "./",                       /* Enable project compilation */
    // "composite": true,                     /* Specify file to store incremental compilation information */
    // "tsBuildInfoFile": "./",               /* Do not emit comments to output. */
    // "removeComments": true,                /* Do not emit outputs. */
    // "noEmit": true,                        /* Import emit helpers from 'tslib'. */
    // "importHelpers": true,                 /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "downlevelIteration": true,            /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */
    // "isolatedModules": true,

    /* Strict Type-Checking Options */        /* Raise error on expressions and declarations with an implied 'any' type. */
    "strict": true,                           /* Enable strict null checks. */
    // "noImplicitAny": true,                 /* Enable strict checking of function types. */
    // "strictNullChecks": true,              /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictFunctionTypes": true,           /* Enable strict checking of property initialization in classes. */
    // "strictBindCallApply": true,           /* Raise error on 'this' expressions with an implied 'any' type. */
    // "strictPropertyInitialization": true,  /* Parse in strict mode and emit "use strict" for each source file. */
    // "noImplicitThis": true,
    // "alwaysStrict": true,                  /* Report errors on unused locals. */

    /* Additional Checks */                   /* Report error when not all code paths in function return a value. */
    // "noUnusedLocals": true,                /* Report errors for fallthrough cases in switch statement. */
    // "noUnusedParameters": true,
    // "noImplicitReturns": true,             /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "noFallthroughCasesInSwitch": true,    /* Base directory to resolve non-absolute module names. */

    /* Module Resolution Options */           /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "moduleResolution": "node",            /* List of folders to include type definitions from. */
    // "baseUrl": "./",                       /* Type declaration files to be included in compilation. */
    // "paths": {},                           /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    // "rootDirs": [],                        /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "typeRoots": [],                       /* Do not resolve the real path of symlinks. */
    // "types": [],                           /* Allow accessing UMD globals from modules. */
    // "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,                  /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "preserveSymlinks": true,              /* Specify the location where debugger should locate map files instead of generated locations. */
    // "allowUmdGlobalAccess": true,          /* Emit a single file with source maps instead of having a separate file. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Enables experimental support for ES7 decorators. */
    // "mapRoot": "",                         /* Enables experimental support for emitting type metadata for decorators. */
    // "inlineSourceMap": true,
    // "inlineSources": true,                 /* Disallow inconsistently-cased references to the same file. */

    /* Experimental Options */undefined
    // "experimentalDecorators": true,undefined
    // "emitDecoratorMetadata": true,undefined

    /* Advanced Options */undefined
    "forceConsistentCasingInFileNames": trueundefined
  }
}


//// [/user/username/projects/myproject/build/file1.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.c = void 0;
    exports.c = 30;
});


//// [/user/username/projects/myproject/build/src/file2.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.d = void 0;
    exports.d = 30;
});



Output::
>> Screen clear
[[90m12:00:25 AM[0m] Starting compilation in watch mode...


[96mtsconfig.json[0m:[93m61[0m:[93m31[0m - [91merror[0m[90m TS1136: [0mProperty assignment expected.

[7m61[0m     /* Experimental Options */undefined
[7m  [0m [91m                              ~~~~~~~~~[0m


[96mtsconfig.json[0m:[93m65[0m:[93m27[0m - [91merror[0m[90m TS1005: [0m',' expected.

[7m65[0m     /* Advanced Options */undefined
[7m  [0m [91m                          ~~~~~~~~~[0m


[96mtsconfig.json[0m:[93m65[0m:[93m27[0m - [91merror[0m[90m TS1136: [0mProperty assignment expected.

[7m65[0m     /* Advanced Options */undefined
[7m  [0m [91m                          ~~~~~~~~~[0m


[96mtsconfig.json[0m:[93m66[0m:[93m5[0m - [91merror[0m[90m TS1005: [0m',' expected.

[7m66[0m     "forceConsistentCasingInFileNames": trueundefined
[7m  [0m [91m    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m


[96mtsconfig.json[0m:[93m66[0m:[93m41[0m - [91merror[0m[90m TS5024: [0mCompiler option 'forceConsistentCasingInFileNames' requires a value of type boolean.

[7m66[0m     "forceConsistentCasingInFileNames": trueundefined
[7m  [0m [91m                                        ~~~~~~~~~~~~~[0m


[[90m12:00:36 AM[0m] Found 5 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/file1.ts","/user/username/projects/myproject/src/file2.ts"]
Program options: {"target":1,"module":2,"outDir":"/user/username/projects/myproject/build","strict":true,"esModuleInterop":true,"watch":true,"project":"/user/username/projects/myproject/tsconfig.json","configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/file1.ts
/user/username/projects/myproject/src/file2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/file1.ts
/user/username/projects/myproject/src/file2.ts

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/file1.ts:
  {"fileName":"/user/username/projects/myproject/file1.ts","pollingInterval":250}
/user/username/projects/myproject/src/file2.ts:
  {"fileName":"/user/username/projects/myproject/src/file2.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/src:
  {"directoryName":"/user/username/projects/myproject/src","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject:
  {"directoryName":"/user/username/projects/myproject","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined
