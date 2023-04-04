export const refreshTokens = () => {
  try {
    console.log("Refreshing tokens...");
  } catch (error) {
    console.error("ERROR: while refreshing tokens");
  }
};

export const feature = () => {
    try {
      console.log("New feature...");
    } catch (error) {
      console.error("ERROR: while executing nre feature");
    }
  };