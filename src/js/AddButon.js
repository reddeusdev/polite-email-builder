export class AddButon {
      constructor(element, table) {
            this.div = document.getElementById(element);
            this.table = table;
            this.render();      
      };
      randomColor() {
            const color = Math.floor(Math.random() * 16777215).toString(16);
            return "#" + color;
      };
      clean(){
            this.div.textContent = "";
            this.div.classList.remove('enabled-choice');
            this.div.classList.add('disabled-choice');
      }
      reset() {
            this.div.textContent = "";
            this.div.classList.toggle('enabled-choice');
            this.div.classList.toggle('disabled-choice');
      }
      chosen(e) {
            const chosen = document.createElement('div');
            chosen.textContent = e.target.textContent;
            chosen.classList.add('chosen');
            this.div.appendChild(chosen);
            const reset = document.createElement('div');
            reset.classList.add('option-reset');
            reset.innerHTML = '<i class="fa-solid fa-arrow-rotate-left"></i>';
            this.div.appendChild(reset);
            reset.addEventListener('click', () => {
                  this.reset();
                  this.render();

            });
      }
      creBtr() {
            this.table.forEach(item => {
                  const btr = document.createElement('button');
                  btr.textContent = item;
                  btr.style.backgroundColor = this.randomColor();
                  btr.classList.add('btr');
                  this.div.appendChild(btr);
                  btr.addEventListener('click', (e) => {
                        this.reset();
                        this.chosen(e);
                  })
            });
      }
      render() {
            this.clean();
            this.creBtr();
      };
}