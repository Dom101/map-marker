export default {
  get(key, defaultValue) {
    const value = process.env[key];
    console.log("TCL: get -> value", process.env)

    if (value == null) {
      return defaultValue;
    }

    try {
      return JSON.parse(value);
    } catch (err) {
      return value;
    }
  },
};