const { createApp } = Vue;

createApp({
    data() {
        return {
            codigo: '',
            nombre: '',
            municipio: '',
            departamento: '',
            telefono: '',
            email: '',
            fechaNacimiento: '',
            sexo: '',
            alumnos: [],
            editando: false,
            indexEditar: -1
        };
    },
    mounted() {
        if (localStorage.getItem('alumnos')) {
            this.alumnos = JSON.parse(localStorage.getItem('alumnos'));
        }
    },
    methods: {
        guardarAlumno() {
            if (this.editando) {
                this.alumnos[this.indexEditar] = {
                    codigo: this.codigo,
                    nombre: this.nombre,
                    municipio: this.municipio,
                    departamento: this.departamento,
                    telefono: this.telefono,
                    email: this.email,
                    fechaNacimiento: this.fechaNacimiento,
                    sexo: this.sexo
                };
                this.editando = false;
            } else {
                let alumno = {
                    codigo: this.codigo,
                    nombre: this.nombre,
                    municipio: this.municipio,
                    departamento: this.departamento,
                    telefono: this.telefono,
                    email: this.email,
                    fechaNacimiento: this.fechaNacimiento,
                    sexo: this.sexo
                };
                this.alumnos.push(alumno);
            }
            localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
            this.limpiarFormulario();
        },
        eliminarAlumno(index) {
            this.alumnos.splice(index, 1);
            localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
        },
        editarAlumno(index) {
            let alumno = this.alumnos[index];
            this.codigo = alumno.codigo;
            this.nombre = alumno.nombre;
            this.municipio = alumno.municipio;
            this.departamento = alumno.departamento;
            this.telefono = alumno.telefono;
            this.email = alumno.email;
            this.fechaNacimiento = alumno.fechaNacimiento;
            this.sexo = alumno.sexo;
            this.editando = true;
            this.indexEditar = index;
        },
        limpiarFormulario() {
            this.codigo = this.nombre = this.municipio = this.departamento = this.telefono = this.email = this.fechaNacimiento = this.sexo = '';
            this.editando = false;
        }
    }
}).mount('#app');
