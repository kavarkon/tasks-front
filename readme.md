# tasks front
## Development
Install Nix. Optionally install direnv and run:

```bash
direnv allow
```

Otherwise enter the development environment manually:

```bash
nix develop
```

Install JavaScript dependencies and start the Vite development server:

```bash
npm ci
npm run dev
```

## Checks

Run browser feature tests:

```bash
npm test
```

Build static production files into `dist/`:

```bash
npm run build
```
