import ev from './events.js';

ev.on('testEvent', () => {
    console.log('ouviu tbm')
})

ev.emit('testEvent', 'blablabla')