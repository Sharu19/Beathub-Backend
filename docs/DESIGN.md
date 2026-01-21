# BeatHub – Database Design Document

## 1. Overview

BeatHub is a music streaming backend designed using MongoDB and Mongoose.
This document explains the schema structure and relationship decisions.

---

## 2. Entities & Relationships

### Artist

- Parent entity
- Can have multiple Albums and Songs

### Album

- References one Artist
- Contains multiple Songs

### Song

- References one Artist and one Album
- Stored independently for efficient querying

### User

- Independent entity
- Owns Playlists

### Playlist

- References one User
- Contains an array of Song references

---

## 3. Reference vs Embed Decisions

### Why Songs are referenced in Playlists

Songs can appear in multiple playlists. Referencing prevents duplication and ensures updates propagate everywhere.

### Why Artist is referenced in Song

Allows fast queries like:
“Get all songs by an artist” without loading albums.

---

## 4. Seeding Strategy

Data was created in this order:
Artist → Album → Song → User → Playlist

This ensures all ObjectId references are valid.

---

## 5. Conclusion

The schema is scalable, normalized, and production-ready.
