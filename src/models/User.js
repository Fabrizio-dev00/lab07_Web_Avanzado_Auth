import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        // Min 8 caracteres, 1 mayúscula, 1 número, 1 especial (#$%&*@)
        return /^(?=.*[A-Z])(?=.*\d)(?=.*[#\$%&\*@]).{8,}$/.test(v);
      },
      message: props => 'La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial (#$%&*@)'
    }
  },
  roles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role'
  }],
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  url_profile: {
    type: String
  },
  address: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual para calcular la edad
UserSchema.virtual('age').get(function () {
  if (!this.birthdate) return null;
  const diff = Date.now() - this.birthdate.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
});

export default mongoose.model('User', UserSchema);

