export let granimInstance = new Granim({
      element: '#canvas-basic',
      name: 'granim',
      opacity: [1, 1],
      states: {
            "default-state": {
                  gradients: [
                        ['#834D9B', '#D04EA6'],
                        ['#1CD8D2', '#93EDC7']
                  ]
            }
      }
});