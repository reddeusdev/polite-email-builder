import granim from 'granim/dist/granim.min'
import {granimInstance} from './js/granimInstance'
import * as table from './js/btrTekst'
import {AddButon} from './js/AddButon'
import {mailContentGrabber, copyToClibpoard ,mailtoAction} from './js/emailBuilder'
import './sass/index.scss';

new AddButon('greetings', table.greetings);
new AddButon('farewells', table.farewells);
new AddButon('followups', table.followups);
new AddButon('conclusions', table.conclusions);

document.getElementById('reset').addEventListener('click', () => {
      new AddButon('greetings', table.greetings);
      new AddButon('farewells', table.farewells);
      new AddButon('followups', table.followups);
      new AddButon('conclusions', table.conclusions);
      const input = document.querySelectorAll('.container-name');
      input.forEach(element => {
            element.value = ""
      })
      
});

document.getElementById('copy').addEventListener('click', () => {
      const copy = mailContentGrabber();
      if (copy > '') {
            copyToClibpoard(copy);
      } else {
            alert('Uzupelnij jakies pole aby bylo co skopiować');
      }
})

document.querySelector('#send').addEventListener('click', mailtoAction);

