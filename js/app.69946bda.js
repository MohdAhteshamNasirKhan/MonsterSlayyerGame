(function(t){function e(e){for(var r,s,o=e[0],u=e[1],l=e[2],h=0,d=[];h<o.length;h++)s=o[h],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"480b":function(t,e,n){"use strict";n("8219")},"4dd5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("MonsterGame")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"centerBlock"},[t._m(0),n("div",{attrs:{id:"main-block"}},[n("div",{staticClass:"health"},[n("h4",[t._v("Monster Health")]),n("div",{staticClass:"health-bar-border"},[n("div",{staticClass:"health-bar",style:t.monsterBar})])]),n("div",{staticClass:"health"},[n("h4",[t._v("Your Health")]),n("div",{staticClass:"health-bar-border"},[n("div",{staticClass:"health-bar",style:t.playerBar})])]),n("div",{staticClass:"actions"},[t.isGameOver?n("div",{attrs:{id:"gameOverBox"}},[n("h3",[t._v("Game Over!")]),"player"===t.winner?n("h4",[t._v("You won :)")]):t._e(),"monster"===t.winner?n("h4",[t._v("You lost :(")]):t._e(),n("button",{on:{click:function(e){return t.restart()}}},[t._v("Restart")])]):t._e(),t.isGameOver?t._e():n("div",[n("div",{staticClass:"box"},[n("div",{staticClass:"section"},[n("button",{on:{click:function(e){return t.attackMonster()}}},[t._v("Attack")])]),n("div",{staticClass:"section"},[n("button",{attrs:{disabled:t.specialAttackCount>0},on:{click:function(e){return t.specialAttack()}}},[t._v(" Special Attack ")])])]),n("div",{staticClass:"box"},[n("div",{staticClass:"section"},[n("button",{attrs:{disabled:!(t.healCount>0)},on:{click:function(e){return t.healPlayer()}}},[t._v(" Heal ")])]),n("div",{staticClass:"section"},[n("button",{on:{click:function(e){return t.surrender()}}},[t._v("Surrender")])])])])]),n("h4",[t._v(t._s(this.winner))])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"top-heading"}},[n("h1",[t._v("Monster Slayer")])])}],u={name:"MonsterGame",data:function(){return{monsterValue:100,playerValue:100,currentRound:null,healCount:0,specialAttackCount:0,isGameOver:!1,winner:""}},watch:{playerValue:function(){this.playerValue<=0&&(this.winner="monster",this.isGameOver=!0)},monsterValue:function(){this.monsterValue<=0&&(this.winner="player",this.isGameOver=!0)}},computed:{monsterBar:function(){return{width:this.monsterValue+"%"}},playerBar:function(){return{width:this.playerValue+"%"}}},methods:{attackValue:function(t,e){var n=Math.round(Math.random()*(e-t)+t);return n},attackMonster:function(){if(this.monsterValue<=0)return this.isGameOver=!0,this.monsterValue=0;this.currentRound++,this.currentRound>0&&this.currentRound%4===0&&(this.currentRound=0,this.healCount+=1),this.monsterValue-=this.attackValue(5,12),this.attackPlayer()},attackPlayer:function(){if(this.playerValue<=0)return this.isGameOver=!0,this.playerValue=0;this.playerValue-=this.attackValue(8,15)},healPlayer:function(){if(this.currentRound++,this.healCount-=1,this.playerValue>=100)return this.playerValue=100;this.playerValue+=this.attackValue(11,15),this.attackPlayer()},specialAttack:function(){this.specialAttackCount=1,this.monsterValue-=this.attackValue(12,20)},surrender:function(){this.isGameOver=!0},restart:function(){this.currentRound=null,this.isGameOver=!1,this.winner="",this.healCount=0,this.specialAttackCount=0,this.monsterValue=100,this.playerValue=100}}},l=u,c=(n("d37f"),n("2877")),h=Object(c["a"])(l,s,o,!1,null,"10c67163",null),d=h.exports,p={name:"App",components:{MonsterGame:d}},f=p,v=(n("480b"),Object(c["a"])(f,a,i,!1,null,"42126a72",null)),m=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(m)}}).$mount("#app")},8219:function(t,e,n){},d37f:function(t,e,n){"use strict";n("4dd5")}});
//# sourceMappingURL=app.69946bda.js.map