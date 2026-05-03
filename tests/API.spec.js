import { test, expect } from '@playwright/test';
import userAPI from '../API/userAPI.js';
import { validateSchema, calculateResponseTime } from '../API/apiUtils.js'
import data from '../testData/data.json'

let UserAPI;
let userId;

test.beforeAll(async () => {
    UserAPI = new userAPI();
    await UserAPI.init();
});

test('Create User', async () => {
    const startTime = Date.now();
    const response = await UserAPI.createUser({
        name: 'Amit',
        job: 'QA Intern'
    });
    const responseTime = calculateResponseTime(startTime);
    console.log('Create User Response Time:', responseTime);
    expect(response.status()).toBe(201);
    const body = await response.json();
    validateSchema(body);
    userId = body.id;
    console.log('Created User ID:', userId);
});

test('Get User', async () => {
    const response = await UserAPI.getUser(data.api.getUserId);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.data.id).toBe(data.api.getUserId);
});

test('Update User', async () => {
    const response = await UserAPI.updateUser(userId, {
        name: 'Amit Updated',
        job: 'Senior QA'
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.name).toBe('Amit Updated');
});