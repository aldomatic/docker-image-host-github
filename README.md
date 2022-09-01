# docker-image-host-github
Example repo to build a docker image via actions and publish to github for hosting


##### KubeCTL commands

Create new deployment 

`kube ctl create deployment -f [FILE NAME]`

Rolling update images to latest and restart pods 

`kubectl rollout restart deploy [DEPLOYMENT NAME]`
