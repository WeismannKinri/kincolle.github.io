(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{805:function(e,n,r){"use strict";r.r(n);var o=r(5),t=Object(o.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),r("p",[e._v("We use SqlSessionFactoryBuilder to build SqlSessionFactory, so let's see how it works")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('public class SqlSessionFactoryBuilder {\n\n  //Reader will read mybatis config file\n  //besides Reader, inputStream is another choice\n  public SqlSessionFactory build(Reader reader) {\n    return build(reader, null, null);\n  }\n\n  public SqlSessionFactory build(Reader reader, String environment) {\n    return build(reader, environment, null);\n  }\n  \n  public SqlSessionFactory build(Reader reader, Properties properties) {\n    return build(reader, null, properties);\n  }\n  \n  //get mybatis config by using XMLConfigBuilder, then build SqlSessionFactory instance\n  public SqlSessionFactory build(Reader reader, String environment, Properties properties) {\n    try {\n      XMLConfigBuilder parser = new XMLConfigBuilder(reader, environment, properties);\n      return build(parser.parse());\n    } catch (Exception e) {\n      throw ExceptionFactory.wrapException("Error building SqlSession.", e);\n    } finally {\n      ErrorContext.instance().reset();\n      try {\n        reader.close();\n      } catch (IOException e) {\n      }\n    }\n  }\n\n  public SqlSessionFactory build(Configuration config) {\n    return new DefaultSqlSessionFactory(config);\n  }\n\n}\n')])])]),r("p",[e._v("Through this source codel, we know we set config of mybatis into SqlSessionFactoryBuilder by using XMLConfigBuilder. Then let's see the source code of XMLConfigBuilder:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('public class XMLConfigBuilder extends BaseBuilder {\n  public XMLConfigBuilder(InputStream inputStream, String environment, Properties props) {\n    this(new XPathParser(inputStream, true, props, new XMLMapperEntityResolver()), environment, props);\n  }\n\n  private XMLConfigBuilder(XPathParser parser, String environment, Properties props) {\n    super(new Configuration());\n    ErrorContext.instance().resource("SQL Mapper Configuration");\n    this.configuration.setVariables(props);\n    this.parsed = false;\n    this.environment = environment;\n    this.parser = parser;\n  }\n  \n  public Configuration parse() {\n    if (parsed) {\n      throw new BuilderException("Each XMLConfigBuilder can only be used once.");\n    }\n    parsed = true;\n    //root node configuration\n    parseConfiguration(parser.evalNode("/configuration"));\n    return configuration;\n  }\n\n  private void parseConfiguration(XNode root) {\n    try {\n      propertiesElement(root.evalNode("properties")); \n      typeAliasesElement(root.evalNode("typeAliases"));\n      pluginElement(root.evalNode("plugins"));\n      objectFactoryElement(root.evalNode("objectFactory"));\n      objectWrapperFactoryElement(root.evalNode("objectWrapperFactory"));\n      settingsElement(root.evalNode("settings"));\n      environmentsElement(root.evalNode("environments"));\n      databaseIdProviderElement(root.evalNode("databaseIdProvider"));\n      typeHandlerElement(root.evalNode("typeHandlers"));\n      mapperElement(root.evalNode("mappers"));\n    } catch (Exception e) {\n      throw new BuilderException("Error parsing SQL Mapper Configuration. Cause: " + e, e);\n    }\n  }\n}\n')])])]),r("p",[e._v("Through these source code we know in conifg file:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("configuration is the root node.")])]),e._v(" "),r("li",[r("p",[e._v("under configuration node, we can config 10 nodes:properties, typeAliases, plugins, objectFactory, objectWrapperFactory, settings, environments, databaseIdProvider, typeHandlers, mappers.")])])])])}),[],!1,null,null,null);n.default=t.exports}}]);