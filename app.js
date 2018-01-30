//Remove Button, removes all current notes;
d3.select('.remove')
    .on('click', function() {
      d3.selectAll('.note')
        .remove();
    });

//Surprise Me Button
d3.select('.lucky')
    .on('click', function(){
      d3.selectAll('.note')
        .style('color', randomRGB)
        .style('background-color', randomRGB)
        .style('border', '8px solid black')
    })


//Selects the new note input field and appends content to the DOM
d3.select("#new-note")
    .on('submit', function() {
      d3.event.preventDefault(); //Prevents page reload on 'submit'
      const input = d3.select('input');
      d3.select("#notes")
        .append('p')
          .classed('note', true)
          .text(input.property('value'));
      input.property('value', '');
    });

const randomRGB = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
