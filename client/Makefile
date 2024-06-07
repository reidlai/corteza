WEB_SUBDIRS := $(filter %/, $(wildcard $(CURDIR)/web/*/))

.PHONY: yarn

yarn:
	@for dir in $(WEB_SUBDIRS); do \
		echo "---Yarning $$dir---"; \
		(cd $$dir && yarn) || (echo "Failed to yarn $$dir"; exit 1); \
	done

link:
	@for dir in $(WEB_SUBDIRS); do \
		echo "---Linking $$dir---"; \
		(cd $$dir && yarn link @cortezaproject/corteza-js && yarn link @cortezaproject/corteza-vue) || (echo "Failed to link $$dir"; exit 1); \
	done

.DEFAULT_GOAL := yarn