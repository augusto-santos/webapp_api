var lang = navigator.language;
var open = false

// Toogle menu
function toogleMenu(trigger, element){
  var elem = element.children
  Array.prototype.forEach.call(elem ,function(i){
    if(i.classList.contains('menu_box')){
      if(trigger){
        i.classList.add('open')
      }else{
        i.classList.remove('open')
      }
    }    
  })
}

// Click Events Handle
document.body.addEventListener('click', function(e){
  var ec = e.target
  
//   if(!ec.classList.contains('menu_trigger')){
//     open = false
//   }else{
//     var menu = ec.parentNode
//     open = !open
//   }
  
  var menu = document.querySelector('.menu_trigger')
//   console.log(menu)
  var parent = menu.parentNode
  if(ec != menu){
    open = false
  }else{
    open = !open
  }
  
  toogleMenu(open, parent)
})

// Instance String
axios.get('../strings/'+ lang +'.json')
    .then(function(res){

    if(res.data.lang == navigator.language){
      console.log('Sua Linguagem é: '+ lang);
    }
  
    document.title = res.data.title_page;
    document.getElementById('main_title').appendChild(document.createTextNode(res.data.main_section.title));
    document.getElementById('main_desc').appendChild(document.createTextNode(res.data.main_section.desc));
    document.getElementById('sing_up').appendChild(document.createTextNode(res.data.main_section.buttons.signup));
    document.getElementById('btn_reader').appendChild(document.createTextNode(res.data.main_section.buttons.reader));
    document.getElementById('feat_title').appendChild(document.createTextNode(res.data.feature_section.title));

    var counter = 0;
  
    res.data.feature_section.columns.forEach(function(item){
      counter = counter + 1;

      document.getElementById('card_icon_' + counter).appendChild(document.createTextNode(item.icon));
      document.getElementById('card_title_' + counter).appendChild(document.createTextNode(item.title));
      document.getElementById('card_desc_' + counter).appendChild(document.createTextNode(item.desc));
    });

  })

// config axios
var cnx = axios.create({
  baseURL: 'https://rest_api-augustosantos55828536.codeanyapp.com/api'
});

// elementos da dom
// main
// var main_elem = document.createElement('h4');
// var main_desc = document.createElement('p');
// second
var second_elem = document.createElement('h4');
var second_desc = document.createElement('p');
// third
var third_elem = document.createElement('h4');
var third_desc = document.createElement('p');

// get dados
cnx.get('/tasks')
  .then(function(resp){
  // carregar as promises, quando prontas nos nodes
  // e atribuir o node ao elemento
  
//   var main_text = document.createTextNode(resp.data[0].Title);
//   main_elem.appendChild(main_text);
//   var desc_text = document.createTextNode(resp.data[0].description);
//   main_desc.appendChild(desc_text);
  
  // seconds att node elem
  var second_text = document.createTextNode(resp.data[1].Title);
  var second_descText = document.createTextNode(resp.data[1].description);
  second_elem.appendChild(second_text);
  second_desc.appendChild(second_descText);
  
})

// main news
// var main_content = document.getElementById('main_news');
// main_content.appendChild(main_desc);
// main_content.insertBefore(main_elem, main_desc);

// second news
var second_content = document.getElementById('second_news');
second_content.appendChild(second_desc);
second_content.insertBefore(second_elem, second_desc);
