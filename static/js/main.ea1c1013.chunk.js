(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(6),n=i.n(a),c=(i(14),i(9)),s=i(2),r=i(1),l=(i(15),i(16),i(17),i(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},m=i(7),j=i.n(m);var b=function(e){var t=e.name,i=e.value,a=e.label,n=void 0===a?t:a,c=e.required,o=void 0!==c&&c,d=e.onChange,m=void 0===d?function(){}:d,b=Object(r.useState)((function(){return"".concat(t,"-").concat(Math.random().toString().slice(2))})),u=Object(s.a)(b,1)[0],h=Object(r.useState)(!1),O=Object(s.a)(h,2),g=O[0],p=O[1],v=g&&o&&!i;return Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:u,children:n}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{id:u,"data-cy":"movie-".concat(t),className:j()("input",{"is-danger":v}),type:"text",placeholder:"Enter ".concat(n),value:i,onChange:function(e){return m(e.target.value)},onBlur:function(){return p(!0)}})}),v&&Object(l.jsx)("p",{className:"help is-danger",children:"".concat(n," is required")})]})},u=function(e){var t=e.onAdd,i=Object(r.useState)(""),a=Object(s.a)(i,2),n=a[0],c=a[1],o=Object(r.useState)(""),d=Object(s.a)(o,2),m=d[0],j=d[1],u=Object(r.useState)(""),h=Object(s.a)(u,2),O=h[0],g=h[1],p=Object(r.useState)(""),v=Object(s.a)(p,2),f=v[0],x=v[1],M=Object(r.useState)(""),N=Object(s.a)(M,2),w=N[0],U=N[1],y=Object(r.useState)(0),I=Object(s.a)(y,2),T=I[0],B=I[1],S=!n.trim()||!O.trim()||!f.trim()||!w.trim();return Object(l.jsxs)("form",{className:"NewMovie",onSubmit:function(){t({title:n,description:m,imgUrl:O,imdbUrl:f,imdbId:w}),B((function(e){return e+1})),c(""),j(""),g(""),x(""),U("")},children:[Object(l.jsx)("h2",{className:"title",children:"Add a movie"}),Object(l.jsx)(b,{name:"title",label:"Title",value:n,onChange:function(e){return c(e)},required:!0}),Object(l.jsx)(b,{name:"description",label:"Description",value:m,onChange:function(e){return j(e)}}),Object(l.jsx)(b,{name:"imgUrl",label:"Image URL",value:O,onChange:function(e){return g(e)},required:!0}),Object(l.jsx)(b,{name:"imdbUrl",label:"Imdb URL",value:f,onChange:function(e){return x(e)},required:!0}),Object(l.jsx)(b,{name:"imdbId",label:"Imdb ID",value:w,onChange:function(e){return U(e)},required:!0}),Object(l.jsx)("div",{className:"field is-grouped",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:S,children:"Add"})})})]},T)},h=i(8),O=function(){var e=Object(r.useState)(h),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(u,{onAdd:function(e){a([].concat(Object(c.a)(i),[e]))}})})]})};n.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.ea1c1013.chunk.js.map