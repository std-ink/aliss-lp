(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{436:function(e,t,r){"use strict";r.r(t);r(43);var n=r(10),o=r(352),c={middleware:"authenticated",components:{apexchart:r.n(o).a},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.dispatch("SetTitle","期間別総支出"),t.next=3,e.$store.dispatch("fa/GetPeriodSummary");case 3:for(i=0;i<e.period.length;i++)e.chart.options.xaxis.categories.push(e.period[i]);e.chart.series.push({name:"総支出",data:e.value});case 5:case"end":return t.stop()}}),t)})))()},computed:{period:function(){return this.$store.getters["fa/PeriodSummary"].period},value:function(){return this.$store.getters["fa/PeriodSummary"].value}},data:function(){return{chart:{options:{plotOptions:{bar:{horizontal:!0}},xaxis:{categories:[]},colors:["#78909C"]},series:[]}}}},h=r(38),component=Object(h.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("apexchart",{attrs:{type:"bar",height:"400",options:this.chart.options,series:this.chart.series}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);