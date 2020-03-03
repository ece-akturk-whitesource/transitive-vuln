# Transitive Vulnerability - Effective Usage Analysis Demo

This is a package that imports 2 libraries with a known high severity vulnerabilities.

js-yaml@2.0.4 - [Deserialization Code Execution](https://www.npmjs.com/advisories/16)

lodash@4.17.11 - [Prototype pollution](https://snyk.io/vuln/SNYK-JS-LODASH-450202)

## Reasoning

This is to create a vulnerable transitive dependency for any project that imports this package
"# transitive-vuln" 
