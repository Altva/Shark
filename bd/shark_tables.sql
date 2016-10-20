create table PreguntaSeguridad(
	idPregunta int unsigned not null auto_increment primary key,
    pregunta varchar(100) not null
);

create table Notificacion(
	idNotificacion int unsigned not null auto_increment primary key,
    tipoNotificacion varchar(15),
    descripcion varchar(50)
);

create table Usuario(
	idUsuario int unsigned not null auto_increment primary key,
    nombreUsuario varchar(30) not null,
    email varchar(40) not null,
    contraseña varchar(30) not null,
    titulo varchar(40),
    descripcion varchar(260),
    genero char(1) not null,
    fechaNacimiento date not null,
    fotoPerfil mediumblob,
    fotoPortada longblob,
    calle varchar(50),
    colonia varchar(50),
    codigoPostal int unsigned,
    municipio varchar(30),
    estado varchar(30),
    pais varchar(30),
    privato tinyint default 0,
    admin tinyint default 0,
    activo tinyint default 1
);

create table Publicacion(
	idPublicacion int unsigned not null auto_increment primary key,
    idCreador int unsigned not null,
    texto mediumtext,
    imagen longblob,
    video longblob,
    tipoContenido varchar(30) not null,
    activo tinyint default 1,
    foreign key (idCreador) references Usuario(idUsuario)
);

create table Seguiendo(
	idSeguidor int unsigned not null,
    idSiguiendo int unsigned not null,
    permisos tinyint not null,
    foreign key(idSeguidor) references Usuario(idUsuario),
    foreign key(idSiguiendo) references Usuario(idUsuario)
);


create table Bloqueo(
	idAdmin int unsigned not null,
	idBloqueado int unsigned not null,
    razonBloqueo varchar(50) not null,
    comentario text,
    foreign key(idAdmin) references Usuario(idUsuario),
    foreign key(idBloqueado) references Usuario(idUsuario)
);

create table RespuestasSeguridad(
	idUsuario int unsigned not null,
    idPregunta int unsigned not null,
    respuesta varchar(50) not null,
    foreign key(idUsuario) references Usuario(idUsuario),
    foreign key(idPregunta) references PreguntaSeguridad(idPregunta)
);

create table Comentario(
	idPublicacion int unsigned not null,
    idUsuario int unsigned not null,
    comentario varchar(250),
    foreign key(idPublicacion) references Publicacion(idPublicacion),
    foreign key(idUsuario) references Usuario(idUsuario)
);

create table MeGusta(
	idPublicacion int unsigned not null,
    idUsuario int unsigned not null,
    foreign key(idPublicacion) references Publicacion(idPublicacion),
    foreign key(idUsuario) references Usuario(idUsuario)
);

create table Reporte(
	idPublicacion int unsigned not null,
    idUsuario int unsigned not null,
    razonReporte varchar(50) not null,
    comentario varchar(250) not null,
	foreign key(idPublicacion) references Publicacion(idPublicacion),
    foreign key(idUsuario) references Usuario(idUsuario)
);

create table Usuario_Notificacion(
	idNotificacion int unsigned not null,
    idUsuario int unsigned not null,
    foreign key(idNotificacion) references Notificacion(idNotificacion),
    foreign key(idUsuario) references Usuario(idUsuario),
    leida tinyint not null default 0
);

rename table megusta to me_gusta;
rename table preguntaseguridad to pregunta_seguridad;
rename table respuestasseguridad to respuesta_seguridad;

alter table notificacion add column idUsuario int unsigned not null;
alter table notificacion add foreign key (idUsuario) references Usuario(idUsuario);
