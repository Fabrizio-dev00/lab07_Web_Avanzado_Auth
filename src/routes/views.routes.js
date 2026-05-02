import express from 'express';

const router = express.Router();

router.get('/signIn', (req, res) => res.render('signIn'));
router.get('/signUp', (req, res) => res.render('signUp'));
router.get('/profile', (req, res) => res.render('profile'));
router.get('/dashboard', (req, res) => res.render('dashboard'));
router.get('/admin', (req, res) => res.render('admin'));
router.get('/403', (req, res) => res.render('403'));


// Redirigir la raíz al login por defecto
router.get('/', (req, res) => res.redirect('/signIn'));

export default router;
