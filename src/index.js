import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.get('/', () => {
      return [
        {
          id: 1,
          name: "Bamboo Pibers",
          img: ["/imgs/BambooPibers.jpg"],
          price: 50,
          category: "SHAMPOO",
          mark: "Mani Moisture",
          shortDesc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.",
          Desc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi.",
          inCart: false,
          count: 0,
          total: 0
        },
        {
          id: 2,
          name: "Bico Borrifador Aplicador de Toppik",
          img: ["/imgs/Turmericlemon.jpg"],
          price: 60.5,
          category: "BODY",
          mark: "PRESSED",
          shortDesc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.",
          Desc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi.",
          inCart: false,
          count: 0,
          total: 0
        },
        {
          id:3,
          name: "Wellnesshot",
          img: ["/imgs/Wellnesshot.jpg"],
          price: 70,
          category: "BODY",
          mark: "PRESSED",
          shortDesc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.",
          Desc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi.",
          inCart: false,
          count: 0,
          total: 0
        },
        {
          id: 4,
          name: "Airspun",
          img: ["/imgs/Airspun.jpg"],
          price: 60.5,
          category: "FACE",
          mark: "PRESSED",
          shortDesc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.",
          Desc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi.",
          inCart: false,
          count: 0,
          total: 0
        },
        {
          id: 5,
          name: "Bico Borrifador Aplicador de Toppik",
          img: ["/imgs/GabrielleChanel.jpg"],
          price: 90.5,
          category: "Perfume",
          mark: "PRESSED",
          shortDesc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.",
          Desc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi.",
          inCart: false,
          count: 0,
          total: 0
        },
        {
          id: 6,
          name: "Ginger Boney",
          img: ["/imgs/GingerBoney.jpg"],
          price: 60.5,
          category: "BODY",
          mark: "PRESSED",
          shortDesc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.",
          Desc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi.",
          inCart: false,
          count: 0,
          total: 0
        },
        {
          id: 7,
          name: "Ex Prunis",
          img: ["/imgs/ExPrunis.jpg"],
          price: 60.5,
          category: "BODYOIL",
          mark: "PHAEDRA",
          shortDesc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.",
          Desc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi.",
          inCart: false,
          count: 0,
          total: 0
        },
        {
          id: 8,
          name: "Relieft",
          img: ["/imgs/Relieft.jpg"],
          price: 83.5,
          category: "SHOWER",
          mark: "PHARMA HEMP",
          shortDesc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.",
          Desc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi.",
          inCart: false,
          count: 0,
          total: 0
        },
        {
          id: 9,
          name: "CREAM-EYE",
          img: ["/imgs/Annmarie.jpg"],
          price: 35.4,
          category: "EYES",
          mark: "ANNMARIE",
          shortDesc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.",
          Desc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi.",
          inCart: false,
          count: 0,
          total: 0
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
