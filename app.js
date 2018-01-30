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
