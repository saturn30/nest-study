import { Request, Response } from "express";
import { Cat, CatType } from "./cats.modal";

// READ 고양이 전체 조회
export const readCats = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
};

// READ 특정 고양이 데이터 조회
export const readCat = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cat = Cat.find((cat) => cat.id === id);
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
};

// CREATE
export const createCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
};

// UPDATE -> PUT
export const updateCat = (req: Request, res: Response) => {
  try {
    const { params, body } = req;
    Cat.forEach((cat, index) => {
      if (cat.id === params.id) {
        Cat[index] = body;
      }
    });
    res.status(200).send({
      success: true,
      data: { body },
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
};

// 부분 Update -> PATCH
export const updatePartialCat = (req: Request, res: Response) => {
  try {
    const { params, body } = req;
    Cat.forEach((cat, index) => {
      if (cat.id === params.id) {
        Cat[index] = { ...cat, ...body };
      }
    });
    res.status(200).send({
      success: true,
      data: { body },
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
};

// delete
export const deleteCat = (req: Request, res: Response) => {
  try {
    const { params, body } = req;
    Cat.forEach((cat, index) => {
      if (cat.id === params.id) {
        delete Cat[index];
      }
    });
    res.status(200).send({
      success: true,
      data: { body },
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
};
