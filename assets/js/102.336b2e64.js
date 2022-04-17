(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{812:function(e,a,t){"use strict";t.r(a);var n=t(5),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"parameterhandler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameterhandler"}},[e._v("#")]),e._v(" ParameterHandler")]),e._v(" "),t("p",[e._v("We knoe ParameterHandler is used for setting params. when StatementHandler operates prepare(), then use it to set params. Let's see the source code:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("package org.apache.ibatis.executor.parameter;\n \nimport java.sql.PreparedStatement;\nimport java.sql.SQLException;\n \n/**\n * A parameter handler sets the parameters of the {@code PreparedStatement}\n *\n * @author Clinton Begin\n */\npublic interface ParameterHandler {\n \n  Object getParameterObject();\n \n  void setParameters(PreparedStatement ps)\n      throws SQLException;\n \n}\n")])])]),t("p",[e._v("It it simple, getParameterObject() is for getting params and setParameters() is for setting params. Let's see its implementation class DefaultParameterHandler:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('/**\n *    Copyright 2009-2015 the original author or authors.\n *\n *    Licensed under the Apache License, Version 2.0 (the "License");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *       http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an "AS IS" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */\npackage org.apache.ibatis.scripting.defaults;\n \nimport java.sql.PreparedStatement;\nimport java.sql.SQLException;\nimport java.util.List;\n \nimport org.apache.ibatis.executor.ErrorContext;\nimport org.apache.ibatis.executor.parameter.ParameterHandler;\nimport org.apache.ibatis.mapping.BoundSql;\nimport org.apache.ibatis.mapping.MappedStatement;\nimport org.apache.ibatis.mapping.ParameterMapping;\nimport org.apache.ibatis.mapping.ParameterMode;\nimport org.apache.ibatis.reflection.MetaObject;\nimport org.apache.ibatis.session.Configuration;\nimport org.apache.ibatis.type.JdbcType;\nimport org.apache.ibatis.type.TypeException;\nimport org.apache.ibatis.type.TypeHandler;\nimport org.apache.ibatis.type.TypeHandlerRegistry;\n \n/**\n * @author Clinton Begin\n * @author Eduardo Macarron\n */\npublic class DefaultParameterHandler implements ParameterHandler {\n \n  private final TypeHandlerRegistry typeHandlerRegistry;\n \n  private final MappedStatement mappedStatement;\n  private final Object parameterObject;\n  private BoundSql boundSql;\n  private Configuration configuration;\n \n  public DefaultParameterHandler(MappedStatement mappedStatement, Object parameterObject, BoundSql boundSql) {\n    this.mappedStatement = mappedStatement;\n    this.configuration = mappedStatement.getConfiguration();\n    this.typeHandlerRegistry = mappedStatement.getConfiguration().getTypeHandlerRegistry();\n    this.parameterObject = parameterObject;\n    this.boundSql = boundSql;\n  }\n \n  @Override\n  public Object getParameterObject() {\n    return parameterObject;\n  }\n \n  @Override\n  public void setParameters(PreparedStatement ps) {\n    ErrorContext.instance().activity("setting parameters").object(mappedStatement.getParameterMap().getId());\n    List<ParameterMapping> parameterMappings = boundSql.getParameterMappings();\n    if (parameterMappings != null) {\n      for (int i = 0; i < parameterMappings.size(); i++) {\n        ParameterMapping parameterMapping = parameterMappings.get(i);\n        if (parameterMapping.getMode() != ParameterMode.OUT) {\n          Object value;\n          String propertyName = parameterMapping.getProperty();\n          if (boundSql.hasAdditionalParameter(propertyName)) { // issue #448 ask first for additional params\n            value = boundSql.getAdditionalParameter(propertyName);\n          } else if (parameterObject == null) {\n            value = null;\n          } else if (typeHandlerRegistry.hasTypeHandler(parameterObject.getClass())) {\n            value = parameterObject;\n          } else {\n            MetaObject metaObject = configuration.newMetaObject(parameterObject);\n            value = metaObject.getValue(propertyName);\n          }\n          TypeHandler typeHandler = parameterMapping.getTypeHandler();\n          JdbcType jdbcType = parameterMapping.getJdbcType();\n          if (value == null && jdbcType == null) {\n            jdbcType = configuration.getJdbcTypeForNull();\n          }\n          try {\n            typeHandler.setParameter(ps, i + 1, value, jdbcType);\n          } catch (TypeException e) {\n            throw new TypeException("Could not set parameters for mapping: " + parameterMapping + ". Cause: " + e, e);\n          } catch (SQLException e) {\n            throw new TypeException("Could not set parameters for mapping: " + parameterMapping + ". Cause: " + e, e);\n          }\n        }\n      }\n    }\n  }\n \n}\n')])])]),t("p",[e._v("The point is setParameters(), it reads ParameterObject object firstly thens use typeHandler to set params.")])])}),[],!1,null,null,null);a.default=r.exports}}]);