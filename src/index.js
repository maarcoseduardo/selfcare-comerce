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
          oldPrice: 80.8,
          price: 50.2,
          category: "SHAMPOO",
          mark: "Mani Moisture",
          shortDesc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.",
          desc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi.",
          inCart: false,
          count: 0,
          total: 0
        },
        {
          id: 2,
          name: "Bico Borrifador Aplicador de Toppik",
          img: ["/imgs/Turmericlemon.jpg"],
          oldPrice: 72.5,
          price: 60.5,
          category: "BODY",
          mark: "PRESSED",
          shortDesc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.",
          desc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi.",
          inCart: false,
          count: 0,
          total: 0
        },
        {
          id:3,
          name: "Wellnesshot",
          img: ["/imgs/Wellnesshot.jpg"],
          oldPrice: 70.9,
          price: 70,
          category: "BODY",
          mark: "PRESSED",
          shortDesc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.",
          desc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi.",
          inCart: false,
          count: 0,
          total: 0
        },
        {
          id: 4,
          name: "Airspun",
          img: ["/imgs/Airspun.jpg"],
          oldPrice: 61.8,
          price: 60.5,
          category: "FACE",
          mark: "PRESSED",
          shortDesc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.",
          desc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi.",
          inCart: false,
          count: 0,
          total: 0
        },
        {
          id: 5,
          name: "Bico Borrifador Aplicador de Toppik",
          img: ["/imgs/GabrielleChanel.jpg"],
          oldPrice: 91.2,
          price: 90.5,
          category: "Fragrance",
          mark: "PRESSED",
          shortDesc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.",
          desc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi.",
          inCart: false,
          count: 0,
          total: 0
        },
        {
          id: 6,
          name: "Ginger Boney",
          img: ["/imgs/GingerBoney.jpg"],
          oldPrice: 69.9,
          price: 60.5,
          category: "BODY",
          mark: "PRESSED",
          shortDesc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.",
          desc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi.",
          inCart: false,
          count: 0,
          total: 0
        },
        {
          id: 7,
          name: "Ex Prunis",
          img: ["/imgs/ExPrunis.jpg"],
          oldPrice: 65.5,
          price: 40.5,
          category: "BODYOIL",
          mark: "PHAEDRA",
          shortDesc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.",
          desc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi.",
          inCart: false,
          count: 0,
          total: 0
        },
        {
          id: 8,
          name: "Relieft",
          img: ["/imgs/Relieft.jpg"],
          oldPrice: 120.5,
          price: 83.5,
          category: "SHOWER",
          mark: "PHARMA HEMP",
          shortDesc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.",
          desc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi.",
          inCart: false,
          count: 0,
          total: 0
        },
        {
          id: 9,
          name: "CREAM-EYE",
          img: ["/imgs/Annmarie.jpg"],
          oldPrice: 43.4,
          price: 35.4,
          category: "EYES",
          mark: "ANNMARIE",
          shortDesc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.",
          desc: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi.",
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
