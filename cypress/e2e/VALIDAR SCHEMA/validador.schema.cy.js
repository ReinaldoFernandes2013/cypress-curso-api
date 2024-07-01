

it('JSON schema validator', () => {
    const schema = {
        title: 'Test Schema v2',
        type: 'object',
        required: ['postId', 'id', 'name', 'email'],
        properties: {
            postId: {
                type: 'number',
                minimum: 5,
            },
            id: {
                type: 'number',
                minimum: 1,
            },
            name: {
                type: 'string',
            },
            email: {
                type: 'string',
            },
            body: {
                type: 'string',
            },
        },
    };

    const expectedValue = [
        {
            postId: 5,
            id: 1,
            name: 'Reinaldo Aparecido Fernandes',
            email: 'reinaldo.fernandes@kobel.com.br',
            body: 'Reinaldo Aparecido Fernandes',
        },
        {
            postId: 5,
            id: 2,
            name: 'Reinaldo Aparecido Fernandes',
            email: 'reinaldo.fernandes@kobel.com.br',
            body: 'Reinaldo Aparecido Fernandes',
        },
    ];

    expect(expectedValue[0]).to.be.jsonSchema(schema)
    expect(expectedValue[1]).to.be.jsonSchema(schema)
});