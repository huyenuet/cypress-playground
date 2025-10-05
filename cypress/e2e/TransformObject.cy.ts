// Define a transformation mapping from API response properties to prepared object properties
const propertyTransformation: { [key: string]: (value: any) => any } = {
  firstName: (value: any) => value,
  surName: (value: any) => value,
  isRegistered: (value: any) => value ? "Yes" : "No"
};

// Function to normalize an object based on the transformation mapping
const normalizeObject = (obj: any, transformation: { [key: string]: (value: any) => any }) => {
  const normalizedObj: { [key: string]: any } = {};
  for (const [apiProp, transformFn] of Object.entries(transformation)) {
    if (apiProp in obj) {
      normalizedObj[apiProp] = transformFn(obj[apiProp]);
    }
  }
  // Include additional properties that are not in the transformation mapping
  for (const key in obj) {
    if (!(key in transformation)) {
      normalizedObj[key] = obj[key];
    }
  }
  return normalizedObj;
};

describe('Compare API Response with Prepared Object', () => {
  it('should match the API response with the prepared object', () => {
    // Define your two objects
    const apiResponse = {
      firstName: "John",
      surName: "Doe",
      age: 30,
      joined_date: "2021-01-01T12:00:00Z",
      isRegistered: true
    };

    const preparedObject = {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      joined_date: "2021-01-01T12:00:00Z",
      isRegistered: "Yes"
    };

    // Normalize objects using the transformation mapping
    const apiResponseNormalized = normalizeObject(apiResponse, propertyTransformation);
    const preparedObjectNormalized = normalizeObject(preparedObject, propertyTransformation);

    // Map surName to lastName for preparedObjectNormalized
    preparedObjectNormalized["surName"] = preparedObjectNormalized["lastName"];
    delete preparedObjectNormalized["lastName"];

    // Compare objects
    expect(apiResponseNormalized).to.eql(preparedObjectNormalized);
  });
});
