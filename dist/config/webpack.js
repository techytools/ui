"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureConfig = void 0;
const tslib_1 = require("tslib");
const constants_1 = require("next/constants");
const path_1 = tslib_1.__importDefault(require("path"));
const webpack_1 = require("webpack");
const utils_1 = require("../utils");
const configureConfig = (baseConfig, nextConfigPath) =>
  tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const nextConfig = yield resolveNextConfig(baseConfig, nextConfigPath);
    (0, utils_1.addScopedAlias)(baseConfig, "next/config");
    setupRuntimeConfig(baseConfig, nextConfig);
    return nextConfig;
  });
exports.configureConfig = configureConfig;
const resolveNextConfig = (baseConfig, nextConfigPath) =>
  tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const nextConfigExport = yield Promise.resolve().then(() =>
      tslib_1.__importStar(require(nextConfigPath ? nextConfigPath : path_1.default.resolve("next.config.js")))
    );
    const nextConfig =
      typeof nextConfigExport === "function"
        ? nextConfigExport(constants_1.PHASE_DEVELOPMENT_SERVER, {
            defaultConfig: baseConfig,
          })
        : nextConfigExport;
    return nextConfig;
  });
const setupRuntimeConfig = (baseConfig, nextConfig) => {
  var _a;
  return void ((_a = baseConfig.plugins) === null || _a === void 0
    ? void 0
    : _a.push(
        new webpack_1.DefinePlugin({
          // this mimics what nextjs does client side
          // https://github.com/vercel/next.js/blob/57702cb2a9a9dba4b552e0007c16449cf36cfb44/packages/next/client/index.tsx#L101
          "process.env.__NEXT_RUNTIME_CONFIG": JSON.stringify({
            serverRuntimeConfig: {},
            publicRuntimeConfig: nextConfig.publicRuntimeConfig,
          }),
        })
      ));
};
