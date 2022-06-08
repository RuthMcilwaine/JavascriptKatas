(() => {
  let distance = 0;
  let depth = 0;
  let arr = [];
  let obj = {};
  let input = `forward 5
 down 5
 forward 8
 up 3
 down 8
 forward 2`;

  const convertInput = (input) => {
    let command = input.split('\n ');
    //console.log(command);
    command.forEach((element) => {
      let output = element.split(' ');
      //console.log(output);

      obj.direction = output[0];
      obj.distance = parseInt(output[1]);
      //console.log(obj);
      arr.push(obj);
      console.log(`arr` + arr.toString());
    });

    function calculateValue(arr) {
      arr.forEach((element) => {
        switch (command) {
          case 'up':
            depth -= value;
            break;
          case 'down':
            depth += value;
            break;
          case 'forward':
            distance += value;
            break;
        }
      });
    }
    console.log(`depth * distance` + depth * distance);

    console.log(`calculateValue(arr)` + calculateValue(arr));
  };

  console.log(`convertInput(input)` + convertInput(input));
})();
