---
categories: ["studio tips"]
date: 07/24/2024
featured: false
image: src/asset/1-article/CROWDSTRIKE.jpg
title: <h2><strong>CamSA24-31: Instructions on how to restore a affected Windows operating system from CrowdStrike</strong></h2>
description: Instructions on how to restore a affected Windows operating system from CrowdStrike.
lang: en
---

## 1. General Information

Cyber ​​security firm CrowdStrike has released information regarding a temporary fix for the affected system with a new update to the CrowdStrike Falcon Sensor. Affected system users have reported experiencing Blue Screen of Death (BSOD) issues.

Affected users and administrators can take the following steps to avoid this problem:

- Open Windows into Safe Mode or Windows Recovery Environment
- Go to C: \ Windows \ System32 \ drivers \ CrowdStrike
- Find and delete a file with the format "C-00000291 * .sys
- Open Windows normally.

## 2. Introduction

Affected users and administrators in public cloud systems or similar environments (including virtual environments) may return to the backup before 04:09 UTC or follow the steps below to avoid encountering this issue:

- Disconnect the virtual disk that loads the operating system from the server.
- Copy the backup data before performing the next step to avoid accidental editing
- Connect this virtual disk to another virtual server
- In this virtual disk go to location% WINDIR% \ System32 \ drivers \ CrowdStrike
- Find and delete a file with the format "C-00000291 * .sys
- Disconnect the virtual disk from another server and reconnect to the original server.
- Open Windows normally.

CrowdStrike has acknowledged that this is a technical issue and has advised users to follow the steps outlined. They are also updating their help portal with the latest information and guidance.