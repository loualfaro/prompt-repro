'use strict'

const prompts = require('prompts')

;(async () => {
  const { prompt1, prompt2 } = await prompts([
    {
      type: 'number',
      name: 'prompt1',
      message:
        'Input some numbers: '
    },
    {
      type: 'text',
      name: 'prompt2',
      message:
        'Input some text: '
    }
  ])

  console.log(`${prompt1}_${prompt2}`)
})()
