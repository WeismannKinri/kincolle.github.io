(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{828:function(e,t,n){"use strict";n.r(t);var a=n(5),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"type"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[e._v("#")]),e._v(" Type")]),e._v(" "),n("p",[e._v("A class with the @component annotation will be created as a bean into a container. And there are other 3 types:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("1. @controller\n2. @service\n3. @repository\n4. @component\n")])])]),n("p",[e._v("In fact, the @service and @repository is @component. Let's see the sourcecode")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('@Target({ElementType.TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Component\npublic @interface Repository {\n\tString value() default "";\n}\n')])])]),n("p",[e._v("The following show you how to scan @component class:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<context:component-scan base-package="com.kincolle">\n')])])]),n("h2",{attrs:{id:"name-and-scope"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#name-and-scope"}},[e._v("#")]),e._v(" Name and Scope")]),e._v(" "),n("p",[e._v("You can set beanname and its scope like the following:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("@Service(“beanName”)\n@Scope(“prototype”)\npublic class User {\n} \n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);