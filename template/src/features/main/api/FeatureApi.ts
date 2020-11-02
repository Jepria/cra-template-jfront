import axios from "axios";
import { Feature, FeatureCreate, FeatureSearchTemplate, FeatureUpdate } from "./FeatureInterface";
import { SearchRequest } from "../../../app/common/types";

const API_URL = process.env.REACT_APP_API_URL;
const withCredentials = false;

export const getFeature = (id?: string): Promise<Feature> => {
  const url = `${API_URL}/feature/${id}/`;
  axios.defaults.withCredentials = withCredentials;
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((reason) => {
      return Promise.reject(reason);
    });
};

export const createFeature = (feature: FeatureCreate): Promise<Feature> => {
  const url = `${API_URL}/feature`;
  return new Promise<Feature>((resolve, reject) => {
    axios
      .post(url, feature, {
        headers: {
          Accept: "application/json;charset=utf-8",
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        if (201 === response.status) {
          let location: string = response.headers["location"];
          axios
            .get(location, {
              headers: {
                Accept: "application/json;charset=utf-8",
                "Content-Type": "application/json;charset=utf-8",
              },
            })
            .then((response) => {
              if (200 === response.status) {
                resolve(response.data);
              } else {
                reject(response);
              }
            })
            .catch((error) => reject(error));
        } else {
          reject(response);
        }
      })
      .catch((error) => reject(error));
  });
};

export const updateFeature = (featureId: string, feature: FeatureUpdate): Promise<Feature> => {
  const url = `${API_URL}/feature/${featureId}/`;
  return new Promise<Feature>((resolve, reject) => {
    axios
      .put(url, feature, {
        headers: {
          Accept: "application/json;charset=utf-8",
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        if (200 === response.status) {
          resolve();
        } else {
          reject(response);
        }
      })
      .catch((error) => reject(error));
  });
};

export const deleteFeature = (featureId: string): Promise<void> => {
  const url = `${API_URL}/feature/${featureId}`;
  axios.defaults.withCredentials = withCredentials;
  return new Promise<void>((resolve, reject) => {
    axios
      .delete(url, {
        headers: {
          Accept: "application/json;charset=utf-8",
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        if (200 === response.status) {
          resolve();
        } else {
          reject(response);
        }
      })
      .catch((error) => reject(error));
  });
};

export const postSearchRequest = (searchRequest: SearchRequest<FeatureSearchTemplate>) => {
  const url = `${API_URL}/feature/search`;
  axios.defaults.withCredentials = withCredentials;
  return new Promise<string>((resolve, reject) => {
    axios
      .post(url, searchRequest, {
        headers: {
          Accept: "application/json;charset=utf-8",
          "Content-Type": "application/json;charset=utf-8",
          "Cache-Control": "no-cache",
        },
      })
      .then((response) => {
        if (201 === response.status) {
          let location: string = response.headers["location"];
          resolve(location.split("/").pop());
        } else {
          reject(response);
        }
      })
      .catch((error) => reject(error));
  });
};

export const searchFeatures = (
  searchId: string,
  pageSize: number,
  page: number
): Promise<Array<Feature>> => {
  const url = `${API_URL}/feature/search/${searchId}/resultset?pageSize=${pageSize}&page=${page}`;
  axios.defaults.withCredentials = withCredentials;
  return new Promise<Array<Feature>>((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          Accept: "application/json;charset=utf-8",
          "Content-Type": "application/json;charset=utf-8",
          "Cache-Control": "no-cache",
        },
      })
      .then((response) => {
        if (200 === response.status) {
          resolve(response.data);
        } else if (204 === response.status) {
          resolve([]);
        } else {
          reject(response);
        }
      })
      .catch((error) => reject(error));
  });
};

export const getResultSetSize = (searchId: string): Promise<number> => {
  const url = `${API_URL}/feature/search/${searchId}/resultset-size`;
  axios.defaults.withCredentials = withCredentials;
  return new Promise<number>((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          Accept: "application/json;charset=utf-8",
          "Content-Type": "application/json;charset=utf-8",
          "Cache-Control": "no-cache",
        },
      })
      .then((response) => {
        if (200 === response.status) {
          resolve(response.data);
        } else {
          reject(response);
        }
      })
      .catch((error) => reject(error));
  });
};