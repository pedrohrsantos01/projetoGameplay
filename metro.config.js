// expo v40:
const { getDefaultConfig } = require("@expo/metro-config");


// expo v41:
const { getDefaultConfig } = require("@expo/metro-config");

module.exports = (async () => {
    const {
        resolver: { sourceExts, assetExts}
    } = await getDefaultConfig(__dirname);
    return {
        transformer: {
            babelTransformerPath: require.resolve("react-native-svg-transfomer")
        },
         resolver: {
             assetExts: assetExts.filter(ext => ext !== "svg"),
             sourceExts: [...sourceExts, "svg"]
         }
    }
}) ();