(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{608:function(e,t,r){e.exports=r.p+"assets/img/Lucene-SourceCode-HowToUseQueryParserToSolveNumericType1.1bc4d24f.png"},609:function(e,t,r){e.exports=r.p+"assets/img/Lucene-SourceCode-HowToUseQueryParserToSolveNumericType2.a063f56f.png"},610:function(e,t,r){e.exports=r.p+"assets/img/Lucene-SourceCode-HowToUseQueryParserToSolveNumericType3.bffd7154.png"},611:function(e,t,r){e.exports=r.p+"assets/img/Lucene-SourceCode-HowToUseQueryParserToSolveNumericType4.6b62a73c.png"},612:function(e,t,r){e.exports=r.p+"assets/img/Lucene-SourceCode-HowToUseQueryParserToSolveNumericType5.9f32b05f.png"},724:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"what-s-the-problem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-s-the-problem"}},[e._v("#")]),e._v(" What's the problem")]),e._v(" "),s("p",[e._v("In lucene, QueryParser is useless for the numeric type. Here let's an example:")]),e._v(" "),s("p",[e._v("first of all, we index 2 documents:")]),e._v(" "),s("p",[s("img",{attrs:{src:r(608),alt:""}})]),e._v(" "),s("p",[e._v("Then use do range search for log3 with the range of [1,2].")]),e._v(" "),s("p",[s("img",{attrs:{src:r(609),alt:""}})]),e._v(" "),s("p",[e._v("finally, we found both the 2 documents can not be searched.")]),e._v(" "),s("h2",{attrs:{id:"source-of-the-problem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#source-of-the-problem"}},[e._v("#")]),e._v(" Source of the Problem")]),e._v(" "),s("p",[e._v("from the source code we will know that:\n(1) QueryParser extends QueryParserBase which is an abstract class.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("public class QueryParser extends QueryParserBase implements QueryParserConstants \n")])])]),s("p",[e._v("(2)In the parse function which is belonged to the QueryParser class, a range request will go into the getRangeQuery function of the QueryParser class.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("protected Query getRangeQuery(String field,String part1,String part2,boolean startInclusive,boolean endInclusive) throws ParseException\n")])])]),s("p",[e._v("(3) in the getRangeQuery function:")]),e._v(" "),s("p",[s("img",{attrs:{src:r(610),alt:""}})]),e._v(" "),s("p",[e._v("we will find that:")]),e._v(" "),s("ul",[s("li",[e._v("the field is what we will search")]),e._v(" "),s("li",[e._v("part1 the\tlimit on the left")]),e._v(" "),s("li",[e._v("part2 the\tlimit on the right")])]),e._v(" "),s("p",[e._v("This function will create date format object first. if its type is the time then search it as a time type, or it will do is as its type is asii.")]),e._v(" "),s("h2",{attrs:{id:"solution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[e._v("#")]),e._v(" Solution")]),e._v(" "),s("p",[e._v("We can use the chain of responsibility pattern to extend QueryParser and rewrite the GetRangeQuery method.")]),e._v(" "),s("p",[e._v("Like the following:")]),e._v(" "),s("p",[s("img",{attrs:{src:r(611),alt:""}})]),e._v(" "),s("p",[e._v("We rewrite the getRangeQuery method to implement the chain of responsibility pattern.")]),e._v(" "),s("p",[e._v("Then we can search is like:")]),e._v(" "),s("p",[s("img",{attrs:{src:r(612),alt:""}})]),e._v(" "),s("p",[e._v("In this way, the range search will go into the extending class MyQueryParser to do the search we need. and finally we will get what we want by searching log3.")])])}),[],!1,null,null,null);t.default=a.exports}}]);