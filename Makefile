.PHONY: run clean test build push

IMAGE ?= unshaveme
TAG = $(shell git ls-files -s . | shasum - | awk '{print $$1}')
PORT = 8080

clean:
	echo "Running ${@}"
	-docker rm -vf $(shell docker ps -qa)

build:
	echo "Running ${@}"
	docker build -t ${IMAGE} -t ${IMAGE_REPO}/${IMAGE}:${TAG} .

push:
	echo "Running ${@}"
	docker push ${IMAGE_REPO}/${IMAGE}:$(TAG)

test:
	echo "Running ${@}"
	docker run --rm -v ${PWD}/test/coverage:/reactor/test/coverage -v ${PWD}/test/results:/reactor/test/results ${IMAGE_REPO}/${IMAGE}:${TAG} npm test

run:
	echo "Running ${@}"
	docker run -d -p ${PORT}:${PORT} -e PORT=${PORT} -e CONFIG=${CONFIG} -e NODE_ENV=${NODE_ENV} --name ${IMAGE} ${IMAGE_REPO}/${IMAGE}:${TAG}