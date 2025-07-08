# vee-anti.xyz

## Local Development

To run the development server locally:

1. **Install dependencies** (if you haven't already):
   ```sh
   pnpm install
   ```

2. **Start the development server:**
   ```sh
   pnpm dev
   ```

3. Open your browser and go to [http://localhost:3000](http://localhost:3000)

---

## Production

- By default, the production server will run at [http://localhost:6969](http://localhost:6969) if you use the provided deployment script and `.env.production`.
- To change the port, edit the `PORT` value in `.env.production`.

---

- Make sure you have [pnpm](https://pnpm.io/) installed globally (`npm install -g pnpm`).
- You may need to set up your database and environment variables as required by the project.
