# bYTr — Project Description

## What It Is

bYTr gives users better content recommendations than platform algorithms.

It supports YouTube, Instagram, and TikTok. Given a favorite creator or channel, it analyzes comments and online sources to extract what people genuinely like — about the creator themselves and about their content — then finds other creators who share those qualities.

The emphasis is on **why** someone resonates, not just **that** they do. Not surface-level category or format, but deeper human and craft-level attributes.

## The Core Difference

Mainstream recommendation algorithms optimize for **capitalistic outcomes**: watch time, ad revenue, engagement metrics.

bYTr is an experiment in building algorithms that optimize for **human-centered, meaningful outcomes** instead.

It filters **out** shallow similarities (genre, category, platform format) and filters **in** deeper ones — values, craft, sincerity, relationship to audience.

## How It Works

### Data Layer

The app ingests comments and online sentiment for a given creator, then structures findings into two distinct attribute types:

**Content attributes** — things said about the work itself:
- Art direction / visual style
- Depth of topic (does the comment describe what's actually happening in the content?)
- Craft and execution
- _(more to be defined)_

**Creator attributes** — things said about the person:
- Personality traits (sincerity, determination, inclusivity)
- Similarities between creator and audience
- Dedication to craft
- _(more to be defined)_

Some attributes apply to both. The data model tracks this distinction and allows filtering across either dimension.

Attribute format:
- `"A [positive thing] is said about [quality] of [content]"`
- `"A [positive thing] is said about [quality] of [creator]"`

### User Flow

The app walks users through multiple rounds of interaction to surface what they actually value:

**Round 1 — Attribute identification:**
User is shown "box elements" — short text descriptions of creator/content attributes — and clicks the ones they agree with. Real attributes are mixed with:
- Random unrelated attributes (decoys)
- Opposite-sentiment attributes (where non-offensive)

Goal: establish a baseline profile of what the user values.

**Round 2 — Bracket challenge:**
Positive comment sentiments compete head-to-head in a bracket format (march-madness style). Probable descriptions are seeded against improbable ones. User picks winners between pairs of positive descriptions, each round eliminating the less-defining one.

Goal: narrow down the single most defining positive characteristic of the creator, as determined by the user.

**Further rounds** can be added to refine signals around content vs. creator attributes, platform-specific patterns, etc.

### Discovery Engine

Once the user's attribute profile is established, the app finds similar creators by matching against the highest-associated sentiments — filterable by:
- Content attributes vs. creator attributes
- Specific value categories
- Platform

## Values (Examples)

- Determined
- Sincere
- Inclusive
- Dedicated to craft
- _(more to be defined)_

## Purpose

This project exists to **discover and refine algorithms** that surface human-centered content — and to demonstrate that recommendation systems don't have to serve capital at the expense of users.
