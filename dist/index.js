'use strict';
const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const resize_1 = __importDefault(require('./routes/api/resize'));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
  res.send(`server is connected at port ${port}`);
});
// end point for resizing an image
app.use('/', resize_1.default);
app.get('*', (req, res) => {
  res.send(
    'wrong route please see the documentation at https://github.com/rzddkh/image-processing-API#readme'
  );
});
app.listen(port, () => {
  console.log('server is live!');
});
exports.default = app;
