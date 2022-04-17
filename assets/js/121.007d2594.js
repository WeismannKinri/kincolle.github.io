(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{837:function(t,e,n){"use strict";n.r(e);var r=n(5),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("The init-method and destroy-method of spring can do things before or after invoke function. Here I will show you an example.")]),t._v(" "),n("h4",{attrs:{id:"define-an-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#define-an-interface"}},[t._v("#")]),t._v(" define an interface")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("public interface StudentService {\n    public void helloSpring(String str);\n}\n")])])]),n("h4",{attrs:{id:"studentservice-implementation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#studentservice-implementation"}},[t._v("#")]),t._v(" StudentService implementation")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('public class StudentServiceImpl implements StudentService,Serializable{\t\n    private static final long serialVersionUID = 6130145558179499205L;\n \n    @Override\n    public void helloSpring(String str) {\n        // TODO Auto-generated method stub\n        System.err.println("run  this is "+str);\n    }\n    \n    public void inits(){\n        System.err.println("do before run helloSpring");\n    }\n\n    public void shutdown(){\n        System.err.println("destroy studentService instence before invoke shutdown() function");\n    }\n}\n')])])]),n("h4",{attrs:{id:"xml-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#xml-file"}},[t._v("#")]),t._v(" XML file")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:aop="http://www.springframework.org/schema/aop"\n    xmlns:tx="http://www.springframework.org/schema/tx" xmlns:context="http://www.springframework.org/schema/context"\n    xsi:schemaLocation="  \n         http://www.springframework.org/schema/context   \n         http://www.springframework.org/schema/context/spring-context-3.0.xsd    \n     http://www.springframework.org/schema/beans   \n     http://www.springframework.org/schema/beans/spring-beans-3.0.xsd  \n     http://www.springframework.org/schema/tx   \n     http://www.springframework.org/schema/tx/spring-tx-3.0.xsd  \n     http://www.springframework.org/schema/aop   \n     http://www.springframework.org/schema/aop/spring-aop-3.0.xsd">\n        \n        \n    <bean id="stu" class="com.kincolle.StudentServiceImpl" init-method="inits" destroy-method="shutdown"></bean>\n\n</beans>\n')])])]),n("h4",{attrs:{id:"test"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[t._v("#")]),t._v(" Test")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('public class TestDemo implements Serializable {\n\n    private static final long serialVersionUID = 6343872716391435079L;\n    \n    public static void main(String[] args){\n        \n        \n        ApplicationContext context = new ClassPathXmlApplicationContext(new String[]{"applicationContext.xml"});\n        \n        StudentService studentService = context.getBean("stu", StudentService.class);\n        \n        studentService.helloSpring("Hello! Spring!");\n        \n        ((ClassPathXmlApplicationContext) context).close();  \n        \n    }\n}\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);