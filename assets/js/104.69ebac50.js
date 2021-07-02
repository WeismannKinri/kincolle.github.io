(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{735:function(e,a,t){"use strict";t.r(a);var r=t(0),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"parametertype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parametertype"}},[e._v("#")]),e._v(" Parametertype")]),e._v(" "),t("p",[e._v("In mybatis, there are some ways to input param into your sql.")]),e._v(" "),t("h2",{attrs:{id:"_1-parametertype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-parametertype"}},[e._v("#")]),e._v(" (1) parameterType")]),e._v(" "),t("p",[e._v("In mybatis you can use parameterType to input param.")]),e._v(" "),t("ul",[t("li",[e._v("Base data: like int, String and Date")]),e._v(" "),t("li",[e._v("Complex data: like Class, Map.")])]),e._v(" "),t("p",[e._v("Here are three examples of searching teacher list according class id:")]),e._v(" "),t("h5",{attrs:{id:"base-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base-data"}},[e._v("#")]),e._v(" Base data")]),e._v(" "),t("p",[e._v("XML file:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('<select id="selectTeacher" parameterType="int" resultType="kincolle.domain.Teacher">  \n    select * from Teacher where c_id=#{id}  \n</select>  \n')])])]),t("p",[e._v("Java code:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("List<Teacher> tList = teacherMapper.selectTeacher(1);    \nfor (Teacher entityTemp : tList) {    \n    System.out.println(entityTemp.toString());    \n} \n")])])]),t("h5",{attrs:{id:"java-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-class"}},[e._v("#")]),e._v(" Java Class")]),e._v(" "),t("p",[e._v("XML file:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('<select id="selectTeacher" parameterType="kincolle.domain.Teacher" resultType="kincolle.domain.Teacher">  \n    select * from Teacher where c_id=#{id}  \n</select>  \n')])])]),t("p",[e._v("Java code:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Teacher queryTeacher=new Teacher();  \nqueryTeacher.setId(1);  \nList<Teacher> tList = teacherMapper.selectTeacher(queryTeacher);    \nfor (Teacher entityTemp : tList) {    \n    System.out.println(entityTemp.toString()); \n} \n")])])]),t("h5",{attrs:{id:"map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[e._v("#")]),e._v(" Map")]),e._v(" "),t("p",[e._v("XML file:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('<select id="selectTeacher" parameterType="Map" resultType="kincolle.domain.Teacher">  \n    select * from Teacher where c_id=#{id} and sex=#{sex}  \n</select>  \n')])])]),t("p",[e._v("Java code")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('Map<String,String> map=new HasMap<String,String>();  \nmap.put("id","1");  \nmap.put("sex","male");  \nList<Teacher> tList = teacherMapper.selectTeacher(map);    \nfor (Teacher entityTemp : tList) {    \n    System.out.println(entityTemp.toString()); \n}  \n')])])]),t("h2",{attrs:{id:"_2-param"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-param"}},[e._v("#")]),e._v(" (2) @param")]),e._v(" "),t("p",[e._v("Another way is using the @param.")]),e._v(" "),t("p",[e._v("In interface:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('public List<Teacher> selectTeacher(@Param(value="id") String id,@Param(value="sex") String sex);\n')])])]),t("p",[e._v("XML file:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('<select id="selectTeacher"  resultType="kincolle.domain.Teacher">  \n    select * from Teacher where c_id=#{id} and sex=#{sex}  \n</select>\n')])])]),t("p",[e._v("Java code:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('List<Teacher> tList = teacherMapper.selectTeacher("1","male");    \nfor (Teacher entityTemp : tList) {    \n    System.out.println(entityTemp.toString());\n}')])])])])}),[],!1,null,null,null);a.default=s.exports}}]);