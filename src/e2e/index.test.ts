import request from 'supertest';
import * as express from'express-serve-static-core';
import { createApp } from '../createApp';

describe('users', () => {
    let app: Express;

    beforeAll;;(() => {
        app = createApp();
    })
})