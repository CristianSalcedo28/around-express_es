import User from '../models/user.js';

export const getUsers = async (req, res) => {
  try {
    const usersList = await User.find();
    return res.send({ data: usersList });
  } catch (err) {
    return res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const getUser = await User.findById(userId).orFail();
    return res.send({ data: getUser });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).send({ message: 'ID con formato incorrecto' });
    }
    if (err.name === 'DocumentNotFoundError') {
      return res.status(404).send({ message: 'No se ha encontrado un usuario con ese ID' });
    }
    return res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
  }
};

export const postUser = async (req, res) => {
  try {
    const { name, about, avatar } = req.body;
    const newUser = await User.create({ name, about, avatar });
    return res.send({ data: newUser });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).send({ message: 'Se pasaron datos incorrectos' });
    }
    return res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, about } = req.body;
    const updatedUser = await User
      .findByIdAndUpdate(req.user._id, { name, about }, { new: true }).orFail();
    return res.send({ data: updatedUser });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).send({ message: 'ID con formato incorrecto' });
    }
    if (err.name === 'DocumentNotFoundError') {
      return res.status(404).send({ message: 'No se ha encontrado un usuario con ese ID' });
    }
    return res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
  }
};

export const updateAvatar = async (req, res) => {
  try {
    const { avatar } = req.body;
    const updatedAvatar = await User
      .findByIdAndUpdate(req.user._id, { avatar }, { new: true }).orFail();
    return res.send({ data: updatedAvatar });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).send({ message: 'ID con formato incorrecto' });
    }
    if (err.name === 'DocumentNotFoundError') {
      return res.status(404).send({ message: 'No se ha encontrado un usuario con ese ID' });
    }
    return res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
  }
};
