'use server'
import { fetchTitles } from "./data";

type formData = {
  title: string;
  minYear: number;
  maxYear: number;
  genres: string[];
}

type Filters = {
  title: string;
  minYear: number;
  maxYear: number;
  genres: string[];
}

export async function populateTitles(filters: Filters, page: number, userEmail: string) {
  const movieTitles = await fetchTitles(page, filters.minYear, filters.maxYear, filters.title, filters.genres, userEmail);
  return movieTitles;
}

export async function filterMovies(formData: formData) {

}