module.exports = {
  <% if (libType === 'react') { -%>
  presets: ["@babel/preset-env", "@babel/preset-react"]
  <% } else { -%>
  presets: ["@babel/preset-env"]
  <% } -%>
}