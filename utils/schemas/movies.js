const joi = require('@hapi/joi');

const movieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)
const movieTitleSchema = joi.string().max(80)
const movieYearSchema = joi.number().min(1888).max(2077)
const movieSchemaCover = joi.string().uri()
const movieDescriotionSchema = joi.string().max(300)
const movieDurationSchema = joi.number().min(1).max(300)
const movieSourceSchema = joi.string().uri()


const createMovieSchema = joi.object({
    title: movieTitleSchema.required(),
    year: movieYearSchema.required(),
    cover: movieSchemaCover.required(),
    description: movieDescriotionSchema.required(),
    duration: movieDurationSchema.required(),
    source: movieSourceSchema.required()
})


const updateMovieSchema = joi.object({
    title: movieTitleSchema,
    year: movieYearSchema,
    cover: movieSchemaCover,
    description: movieDescriotionSchema,
    duration: movieDurationSchema,
    source: movieSourceSchema
})

module.exports = {
    movieIdSchema,
    createMovieSchema,
    updateMovieSchema,
};