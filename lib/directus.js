import { createDirectus, rest,createUser } from '@directus/sdk';

const directus = createDirectus('http://localhost:8055').with(rest());

export default directus;