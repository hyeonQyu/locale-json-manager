#!/usr/bin/env node

import { Default } from '../lib/defines/default';

const app = require('../lib/app');
app.run({ port: Default.PORT, env: process.env.NODE_ENV ?? 'production' });
